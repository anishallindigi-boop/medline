'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Clock, User } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { getAllBlogs } from '@/redux/slice/BlogSlice';
import ApiLoader from '../elements/ApiLoader';

const IMAGE_URL = process.env.NEXT_PUBLIC_API_URL;

const Page = () => {
  const dispatch = useAppDispatch();
  const { loading, error, blogs } = useAppSelector(
    (state: RootState) => state.blog
  );

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <ApiLoader />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 py-20">
        Failed to load blogs
      </p>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* <h1 className="text-3xl font-bold mb-10 text-gray-900">
          Latest Blogs
        </h1> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: any) => {
            const image =
              blog.image && IMAGE_URL
                ? `${IMAGE_URL}${blog.image}`
                : '/default.jpg';

            return (
              <Link
                key={blog._id}
                href={`/blog/${blog.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                {/* Image */}
                <div className="h-52 bg-gray-100 overflow-hidden">
                  <img
                    src={image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Category */}
                  <span className="inline-block mb-2 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {blog.category?.length
                      ? blog.category.map((c: any) => c.name).join(', ')
                      : 'General'}
                  </span>

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {blog.title}
                  </h2>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>Admin</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{formatDate(blog.createdAt)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Page;
