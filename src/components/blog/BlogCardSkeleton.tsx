
// components/BlogCardSkeleton.tsx

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const BlogCardSkeleton = () => {
  return (
    <Card className="animate-pulse">
      <div className="h-48 bg-muted" />
      <CardHeader>
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-6 h-6 bg-muted rounded-full" />
          <div className="h-4 w-24 bg-muted rounded" />
        </div>
        <div className="h-6 bg-muted w-3/4 rounded mb-2" />
        <div className="h-4 bg-muted w-1/2 rounded" />
      </CardHeader>
      <CardContent>
        <div className="h-4 bg-muted rounded w-full mb-2" />
        <div className="h-4 bg-muted rounded w-5/6 mb-4" />
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-5 w-12 bg-muted rounded-full" />
          <div className="h-5 w-16 bg-muted rounded-full" />
        </div>
        <div className="h-4 w-1/3 bg-muted rounded" />
      </CardContent>
      <CardFooter>
        <div className="h-10 w-full bg-muted rounded" />
      </CardFooter>
    </Card>
  );
};

export default BlogCardSkeleton;


// import { Skeleton } from "@/components/ui/skeleton";
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

// export function BlogCardSkeleton() {
//   return (
//     <Card className="overflow-hidden">
//       <Skeleton className="h-48 w-full rounded-none" />
//       <CardHeader className="p-4 pb-0">
//         <Skeleton className="h-6 w-3/4 mb-2" />
//         <Skeleton className="h-4 w-1/2 mb-2" />
//       </CardHeader>
//       <CardContent className="p-4">
//         <Skeleton className="h-4 w-full mb-2" />
//         <Skeleton className="h-4 w-full mb-2" />
//         <Skeleton className="h-4 w-3/4" />
//       </CardContent>
//       <CardFooter className="p-4 pt-0">
//         <Skeleton className="h-8 w-24" />
//       </CardFooter>
//     </Card>
//   );
// }
