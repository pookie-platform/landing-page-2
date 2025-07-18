export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Welcome</h3>
          <p className="mt-2 text-gray-600">Start building your application here.</p>
        </div>
      </div>
    </div>
  );
}