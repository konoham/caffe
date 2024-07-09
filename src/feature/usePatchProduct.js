const usePatchProduct = async (qty, id) => {
  const data = {
    qty,
  };
  try {
    const Patch = await fetch(`http://localhost:2000/CART/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await Patch.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export default usePatchProduct;
