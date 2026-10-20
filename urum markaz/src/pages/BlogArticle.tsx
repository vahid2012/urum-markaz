import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ChevronDown, MessageCircle, FileText, User } from 'lucide-react';
import { useState } from 'react';
import Seo from '@/components/Seo';
import BrandedImage from '@/components/BrandedImage';
import { getArticle, blogArticles } from '@/data/blog';
import { SITE } from '@/data/site';

function renderTable(lines: string[]) {
  const rows = lines.filter((l) => l.trim().startsWith('|')).map((l) =>
    l.split('|').map((c) => c.trim()).filter(Boolean)
  );
  if (rows.length < 2) return null;
  const [header, , ...body] = rows;
  return (
    <div className="overflow-x-auto my-5 rounded-xl border border-slate-200">
      <table className="w-full text-sm">
        <thead className="bg-navy-600 text-white">
          <tr>{header.map((h, i) => <th key={i} className="px-4 py-2.5 text-right font-bold">{h}</th>)}</tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} className={ri % 2 ? 'bg-slate-50' : 'bg-white'}>
              {row.map((c, ci) => <td key={ci} className="px-4 py-2.5 text-slate-700 border-t border-slate-100">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderBody(body: string) {
  const lines = body.split('\n');
  const out: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) { i++; continue; }

    if (trimmed.startsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      const tbl = renderTable(tableLines);
      if (tbl) out.push(<div key={key++}>{tbl}</div>);
      continue;
    }

    if (trimmed.startsWith('## ')) {
      out.push(<h2 key={key++} className="text-xl font-bold text-navy-600 mt-7 mb-3">{trimmed.slice(3)}</h2>);
      i++; continue;
    }
    if (trimmed.startsWith('### ')) {
      out.push(<h3 key={key++} className="text-lg font-bold text-navy-600 mt-5 mb-2">{trimmed.slice(4)}</h3>);
      i++; continue;
    }

    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ''));
        i++;
      }
      out.push(
        <ol key={key++} className="list-decimal pr-6 space-y-1.5 my-3 text-slate-700">
          {items.map((it, idx) => <li key={idx}>{it}</li>)}
        </ol>
      );
      continue;
    }

    if (trimmed.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      out.push(
        <ul key={key++} className="list-disc pr-6 space-y-1.5 my-3 text-slate-700">
          {items.map((it, idx) => <li key={idx}>{it}</li>)}
        </ul>
      );
      continue;
    }

    out.push(<p key={key++} className="text-slate-700 leading-relaxed my-3">{trimmed}</p>);
    i++;
  }

  return out;
}

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticle(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center">
        <h1 className="text-2xl font-bold text-navy-600">مقاله یافت نشد</h1>
        <Link to="/blog" className="mt-4 inline-block text-emerald-600 font-bold">بازگشت به بلاگ</Link>
      </div>
    );
  }

  const related = blogArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      image: article.image,
      datePublished: article.date,
      author: { "@type": "Organization", name: article.author },
      publisher: { "@type": "Organization", name: "اروم مرکز" },
      mainEntityOfPage: `${SITE.url}/blog/${article.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <Seo
        title={`${article.title} | اروم مرکز`}
        description={article.excerpt}
        keywords={article.tags.join(', ')}
        image={article.image}
        path={`/blog/${article.slug}`}
        jsonLd={jsonLd}
        type="article"
      />

      <article>
        {/* HERO */}
        <section className="relative h-64 md:h-72 flex items-end overflow-hidden">
          <BrandedImage src={article.image} alt={article.title} className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-700 via-navy-600/50 to-transparent" />
          <div className="relative max-w-4xl mx-auto px-4 pb-8 w-full">
            <nav className="text-xs text-navy-100 mb-3 flex items-center gap-2">
              <Link to="/" className="hover:text-emerald-300">خانه</Link><span>/</span>
              <Link to="/blog" className="hover:text-emerald-300">بلاگ</Link>
            </nav>
            <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded mb-3">{article.category}</span>
            <h1 className="text-xl md:text-3xl font-extrabold text-white leading-tight text-balance">{article.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-navy-100">
              <span className="flex items-center gap-1"><User size={13} /> {article.author}</span>
              <span className="flex items-center gap-1"><Calendar size={13} /> {article.date}</span>
              <span className="flex items-center gap-1"><Clock size={13} /> {article.readTime}</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
            <p className="text-lg text-slate-700 leading-relaxed border-r-4 border-emerald-500 pr-4 mb-6 font-medium">{article.excerpt}</p>
            <div className="prose max-w-none">{renderBody(article.body)}</div>
          </div>

          {/* TAGS */}
          <div className="mt-6 flex flex-wrap gap-2">
            {article.tags.map((t) => (
              <span key={t} className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">#{t}</span>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-10 bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-bold text-navy-600 mb-5 flex items-center gap-2">
              <FileText size={20} className="text-emerald-500" /> سوالات متداول
            </h2>
            <div className="space-y-3">
              {article.faqs.map((f, i) => (
                <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-right hover:bg-slate-50 transition-colors">
                    <span className="font-bold text-navy-600 text-sm">{f.q}</span>
                    <ChevronDown size={18} className={`text-slate-400 transition-transform shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed animate-fade-in">{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 bg-gradient-to-l from-navy-600 to-navy-700 rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-lg font-bold mb-2">سوال دارید یا نیاز به مشاوره دارید؟</h3>
            <p className="text-navy-100 text-sm mb-4">کارشناسان اروم مرکز در واتساپ پاسخگوی شما هستند.</p>
            <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 px-5 py-3 rounded-xl font-bold transition-colors">
              <MessageCircle size={18} /> تماس در واتساپ
            </a>
          </div>
        </div>
      </article>

      {/* RELATED */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <h2 className="text-xl font-bold text-navy-600 mb-5">مقالات مرتبط</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {related.map((a) => (
            <Link key={a.slug} to={`/blog/${a.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-36 relative">
                <BrandedImage src={a.image} alt={a.title} className="w-full h-full" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-navy-600 text-sm leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors">{a.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-emerald-600 text-xs font-bold">ادامه مطلب <ArrowLeft size={12} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
