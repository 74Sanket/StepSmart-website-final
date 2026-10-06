// components/blog/BlogFilterTabs.tsx
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BlogFilterTabsProps {
  allTags: string[];
  activeTab: string;
  onChange: (value: string) => void;
}

const BlogFilterTabs = ({
  allTags,
  activeTab,
  onChange,
}: BlogFilterTabsProps) => (
  <Tabs defaultValue="all" value={activeTab} onValueChange={onChange}>
    <TabsList className="mb-4 flex flex-wrap h-auto">
      <TabsTrigger value="all" className="mb-1">
        All Posts
      </TabsTrigger>
      {allTags.map((tag) => (
        <TabsTrigger key={tag} value={tag.toLowerCase()} className="mb-1">
          {tag}
        </TabsTrigger>
      ))}
    </TabsList>
  </Tabs>
);

export default BlogFilterTabs;
