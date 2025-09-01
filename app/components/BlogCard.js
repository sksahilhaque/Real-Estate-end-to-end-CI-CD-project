import Link from "next/link";
import { Calendar, User, Tag } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{post.date}</span>
            </div>
          </div>

          <Link
            href={`/blog/${post.id}`}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}
