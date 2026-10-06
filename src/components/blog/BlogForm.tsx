import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema
const blogFormSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  tags: z.string().optional(),
  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters" }),
  image: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, { message: "Please select an image" }),
});

type BlogFormValues = z.infer<typeof blogFormSchema>;

const BlogForm = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      tags: "",
      content: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: BlogFormValues) => {
    console.log("Form submitted:", data);

    toast({
      title: "Blog post created!",
      description: "Your blog post has been submitted successfully.",
    });

    form.reset();
    setSelectedImage(null);
  };

  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl font-semibold">Create a New Blog Post</h3>
        <p className="text-muted-foreground">
          Share your knowledge and insights with the StepSmart community
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a title for your blog post"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Education, Learning, Technology"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Cover Image</FormLabel>
                  <FormControl>
                    <div className="space-y-4">
                      <div className="flex flex-col items-center justify-center w-full border-2 border-dashed border-border rounded-lg p-6 cursor-pointer hover:bg-secondary/50 transition-colors">
                        <input
                          type="file"
                          id="image"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            onChange(e.target.files);
                            handleImageChange(e);
                          }}
                          {...rest}
                        />
                        <label
                          htmlFor="image"
                          className="flex flex-col items-center justify-center cursor-pointer w-full h-full"
                        >
                          <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                          <span className="font-medium">
                            Click to upload an image
                          </span>
                          <span className="text-sm text-muted-foreground mt-1">
                            PNG, JPG or WEBP (Max 3MB)
                          </span>
                        </label>
                      </div>

                      {selectedImage && (
                        <div className="relative mt-2 w-full aspect-video rounded-lg overflow-hidden">
                          <img
                            src={selectedImage}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your blog post here..."
                      rows={10}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg">
              Publish Post
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BlogForm;

// import { useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useToast } from "@/hooks/use-toast";

// const BlogForm = () => {
//   const [newBlogTitle, setNewBlogTitle] = useState("");
//   const [newBlogContent, setNewBlogContent] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     setTimeout(() => {
//       toast({
//         title: "Blog post submitted",
//         description: "Your blog post has been submitted for review.",
//       });
//       setNewBlogTitle("");
//       setNewBlogContent("");
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   return (
//     <Card>
//       <form onSubmit={handleSubmit}>
//         <CardHeader>
//           <CardTitle>New Article</CardTitle>
//           <CardDescription>
//             Share your knowledge and insights with the StepSmart community.
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <Input
//             id="title"
//             placeholder="Enter the title of your blog post"
//             value={newBlogTitle}
//             onChange={(e) => setNewBlogTitle(e.target.value)}
//             required
//           />
//           <Input id="image" type="file" accept="image/*" />
//           <textarea
//             id="content"
//             className="flex h-32 w-full rounded-md border px-3 py-2 text-sm"
//             placeholder="Write your blog content here..."
//             value={newBlogContent}
//             onChange={(e) => setNewBlogContent(e.target.value)}
//             required
//           />
//           <Input id="tags" placeholder="Education, Learning, Technology" />
//         </CardContent>
//         <CardFooter>
//           <Button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Submitting..." : "Submit Post"}
//           </Button>
//         </CardFooter>
//       </form>
//     </Card>
//   );
// };

// export default BlogForm;
