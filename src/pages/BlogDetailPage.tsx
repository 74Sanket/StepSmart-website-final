
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { blogPosts } from "@/data/blogData";
import { blogPosts} from "@/data/blog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const [likes, setLikes] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const { toast } = useToast();

  const post = blogPosts.find((p) => p.id === id);
  const relatedPosts = blogPosts
    .filter((p) => p.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  useEffect(() => {
    // Reset state when blog post changes
    setComments([]);
    setLikes(Math.floor(Math.random() * 50) + 5);
    setUserLiked(false);
  }, [id]);

  const handleLike = () => {
    if (userLiked) {
      setLikes(likes - 1);
      setUserLiked(false);
    } else {
      setLikes(likes + 1);
      setUserLiked(true);
      toast({
        title: "Article liked",
        description: "Thank you for your feedback!",
        duration: 3000,
      });
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !name.trim()) return;

    const newComment = {
      id: Date.now().toString(),
      name,
      content: comment,
      date: new Date().toISOString(),
    };

    setComments([newComment, ...comments]);
    setComment("");
    toast({
      title: "Comment added",
      description: "Your comment has been posted!",
      duration: 3000,
    });
  };

  if (!post) {
    return (
      <div className="container py-12 px-4 md:px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <p className="mb-8">
          The blog post you're looking for might have been removed or doesn't
          exist.
        </p>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8 px-4 md:px-6 max-w-4xl mx-auto">
      <Link
        to="/blog"
        className="inline-flex items-center text-sm text-muted-foreground mb-6 hover:text-primary animate-in"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to Blog
      </Link>

      <article className="prose prose-lg dark:prose-invert w-full max-w-none animate-in">
        <header className="mb-8 not-prose">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-0.5 bg-primary/10 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            {post.title}
          </h1>

          <div className="flex items-center space-x-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="mx-2">•</span>
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </header>

        <div className="rounded-lg overflow-hidden mb-8">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-auto object-cover max-h-[400px]"
          />
        </div>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>

        <div className="my-8 border-t border-b border-border py-4 flex justify-between items-center not-prose">
          <div className="flex items-center gap-4">
            <Button
              variant={userLiked ? "default" : "outline"}
              size="sm"
              className="gap-1.5"
              onClick={handleLike}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={userLiked ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {userLiked ? "Liked" : "Like"}
              <span className="ml-1">({likes})</span>
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" aria-label="Share on Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Share on LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Share via Email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </Button>
          </div>
        </div>
      </article>

      {/* Comments Section */}
      <section className="my-12 animate-in" style={{animationDelay: "0.1s"}}>
        <h2 className="text-2xl font-bold mb-6 font-heading">Comments</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Leave a comment</CardTitle>
            <CardDescription>
              Share your thoughts on this article
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCommentSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email (not published)"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium mb-1"
                >
                  Comment
                </label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Write your thoughts here..."
                  required
                />
              </div>
              <Button type="submit">Post Comment</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6 mt-8">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="border-b border-border pb-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">{comment.name}</h4>
                  <span className="text-sm text-muted-foreground">
                    {new Date(comment.date).toLocaleDateString()}
                  </span>
                </div>
                <p>{comment.content}</p>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-muted-foreground">
              <p>Be the first to comment on this article</p>
            </div>
          )}
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="my-12 animate-in" style={{animationDelay: "0.2s"}}>
        <h2 className="text-2xl font-bold mb-6 font-heading">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 staggered-animate">
          {relatedPosts.map((relatedPost) => (
            <Card key={relatedPost.id}>
              <div className="h-40 overflow-hidden">
                <img
                  src={relatedPost.coverImage}
                  alt={relatedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-base line-clamp-2">
                  <Link
                    to={`/blog/${relatedPost.id}`}
                    className="hover:text-primary"
                  >
                    {relatedPost.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardFooter className="p-4 pt-0">
                <div className="text-sm text-muted-foreground">
                  {new Date(relatedPost.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                  <span className="mx-2">•</span>
                  {relatedPost.readTime} min read
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
