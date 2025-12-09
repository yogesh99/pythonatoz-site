import { blogs } from "@/data/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) return notFound();

  return (
    <section className="max-w-4xl mx-auto px-5 py-16 text-white">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-block mb-6 text-sm text-brandYellow hover:underline"
      >
        ← Back to Blogs
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold text-brandYellow leading-tight mb-3">
        {post.title}
      </h1>

      <p className="text-xs opacity-70 mb-10">
        {post.date} • {post.readTime}
      </p>

      <div className="space-y-5 leading-relaxed text-slate-200 text-[16px]">
        {post.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
