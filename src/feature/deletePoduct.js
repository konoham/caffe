const useDeleteProduct = async (id) => {
  try {
    const Delete = await fetch(`http://localhost:2000/CART/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await Delete.json();
    console.log(response);
    console.log(id);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export default useDeleteProduct;
