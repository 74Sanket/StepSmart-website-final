import { useState } from "react";
import { blogPosts } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";
import BlogForm from "@/components/blog/BlogForm";
import SearchInput from "@/components/ui/SearchInput";
import BlogFilterTabs from "@/components/blog/BlogFilterTabs";
import BlogCardSkeleton from "@/components/blog/BlogCardSkeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tagFilter, setTagFilter] = useState("all");
  const [tabView, setTabView] = useState("posts");
  const [isLoading, setIsLoading] = useState(false);

  const isAdmin = true; // Replace this with actual admin check (e.g., from context or auth)

  const filteredPosts = blogPosts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    )
    .filter(
      (post) =>
        tagFilter === "all" ||
        post.tags.some((tag) => tag.toLowerCase() === tagFilter.toLowerCase())
    );

  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  return (
    <div className="container py-8 px-4 md:px-6 max-w-5xl mx-auto">
      <header className="space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">StepSmart Blog</h1>
        <p className="text-lg text-muted-foreground">
          Insights, tips, and stories to enhance your learning journey
        </p>
        <SearchInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>

      <Tabs value={tabView} onValueChange={setTabView}>
        {isAdmin && (
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="posts">All Posts</TabsTrigger>
              <TabsTrigger value="create">Create Post</TabsTrigger>
            </TabsList>
          </div>
        )}

        <TabsContent value="posts">
          <BlogFilterTabs
            allTags={allTags}
            activeTab={tagFilter}
            onChange={setTagFilter}
          />
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[...Array(6)].map((_, index) => (
                <BlogCardSkeleton key={index} />
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">
                No posts found matching your search
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}
        </TabsContent>

        {isAdmin && (
          <TabsContent value="create">
            <section className="mt-8 border-t pt-8">
              <h2 className="text-2xl font-bold mb-6">
                Submit a New Blog Post
              </h2>
              <BlogForm />
            </section>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default BlogPage;


