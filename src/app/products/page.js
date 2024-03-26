import DeleteProduct from "@/util/deleteProduct";
import Link from "next/link";

const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products",{cache:"no-cache"});

  data = await data.json();

  console.log(data);

  if (data) {
    return data.result;
  } else {
    return { success: false };
  }
};

export default async function Page() {
  const products = await getProducts();

  console.log(products);

  return (
    <div>
      <h1>Products Page</h1>
      <Link href="/addproduct">Go to Add Products</Link>

      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Color</td>
            <td>Company</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.color}</td>
              <td>{item.company}</td>
              <td>{item.category}</td>
              <td><Link href={"products/"+item._id}>Edit</Link></td>
              <td><DeleteProduct id ={item._id}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
