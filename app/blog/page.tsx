import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-16 text-white">
      <h1 className="text-4xl font-bold mb-2">
        Blog <span className="text-brandYellow">/ Python & Automation</span>
      </h1>

      <p className="text-slate-300 mb-10 text-sm md:text-base">
        Learn Python faster with real insights, automation examples &
        freelancing tricks.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group bg-[#092F4A] p-6 rounded-xl border border-white/10 
                       hover:border-brandYellow/60 hover:shadow-[0_0_18px_rgba(247,212,51,0.3)] 
                       transition-all duration-300 text-white"
          >
            <h2 className="text-lg font-semibold group-hover:text-brandYellow leading-tight">
              {post.title}
            </h2>

            <p className="text-xs opacity-70 mt-1">
              {post.date} · {post.readTime}
            </p>

            <p className="mt-3 text-sm text-slate-300">{post.excerpt}</p>

            <span
              className="inline-block mt-4 font-medium text-brandYellow 
                             group-hover:translate-x-1 transition"
            >
              Read More →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
