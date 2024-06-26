export const ErrorComp = ({ error }) => {
  return (
    <>
      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.type === "required" && "This field is required"}
          {error.type === "minLength" && "Password must be at least 6 characters"}
          {/* Tambahkan pesan error untuk setiap validasi yang Anda terapkan */}
        </p>
      )}
    </>
  );
};
