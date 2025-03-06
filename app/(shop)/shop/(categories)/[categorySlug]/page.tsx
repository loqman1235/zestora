const CategoryPage = async ({
  params,
}: {
  params: Promise<{ cat: string }>;
}) => {
  const { cat } = await params;
  return <div>CategoryPage {cat}</div>;
};
export default CategoryPage;
