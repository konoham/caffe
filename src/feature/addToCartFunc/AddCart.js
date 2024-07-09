const useAddCart = async (data) => {
  try {
    const Post = await fetch("http://localhost:2000/CART", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await Post.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export default useAddCart;
