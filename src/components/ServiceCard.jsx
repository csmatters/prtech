function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-500 list-disc pl-5 space-y-1">
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceCard;