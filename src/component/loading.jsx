export default function Loading() {
return (
      <div className="text-center p-8">
        <div className="spinner w-10 h-10 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full mx-auto"></div>
        <p className="mt-4 text-gray-600 font-medium">Loading inspirational quotes...</p>
      </div>
    );
}