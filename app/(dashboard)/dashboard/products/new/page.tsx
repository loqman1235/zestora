import { CardContainer } from "@/components/global/card-container";
import { AddProductForm } from "./_components/add-product-form";

const AddNewProductPage = () => {
  // TODO: ADD NEW PRODUCT FORM
  return (
    <CardContainer>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold">Add New Product</h3>
            <p className="text-muted-foreground text-sm">
              Add a new product to your inventory and manage your catalog.
            </p>
          </div>
        </div>
      </div>

      {/* TODO: ADD NEW PRODUCT FORM */}
      <AddProductForm />
    </CardContainer>
  );
};
export default AddNewProductPage;
