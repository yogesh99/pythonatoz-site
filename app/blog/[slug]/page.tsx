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

  const shareUrl = `https://pythonatoz.in/blog/${post.slug}`;
  const text = encodeURIComponent(post.title);

  return (
    <section className="max-w-3xl mx-auto px-5 py-16 text-white">
      <Link
        href="/blog"
        className="text-brandYellow text-sm hover:underline mb-4 block"
      >
        ← Back to Blogs
      </Link>

      {/* Cover Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-60 md:h-110 object-cover rounded-xl shadow-lg mb-8"
      />

      <h1 className="text-3xl md:text-4xl font-bold text-brandYellow mb-2">
        {post.title}
      </h1>
      <p className="text-xs opacity-70 mb-8">
        {post.date} • {post.readTime}
      </p>

      {/* Share Buttons */}
      <div className="flex gap-3 mb-10">
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
          target="_blank"
          className="bg-[#0077B5] px-3 py-1.5 rounded text-sm hover:opacity-80"
        >
          LinkedIn
        </a>

        <a
          href={`https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`}
          target="_blank"
          className="bg-black px-3 py-1.5 rounded text-sm hover:opacity-80"
        >
          X / Twitter
        </a>

        <a
          href={`https://wa.me/?text=${text}%20${shareUrl}`}
          target="_blank"
          className="bg-green-600 px-3 py-1.5 rounded text-sm hover:opacity-80"
        >
          WhatsApp
        </a>
      </div>

      <div className="space-y-5 leading-relaxed text-slate-200">
        {post.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
