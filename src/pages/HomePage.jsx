import StateExample from '../components/StateExample';
import PropsExample from '../components/PropsExample';
import InteractiveDemo from '../components/InteractiveDemo';

function HomePage() {
  return (
    <>
      {/* Introduction Section */}
      <section className="mb-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            What are States and Props?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-blue-600">State</h3>
              <p className="text-gray-700 leading-relaxed">
                State is like a component's memory. It stores data that can change over time and
                causes the component to re-render when updated. Think of it as the component's
                internal data that affects what it displays.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Managed within the component</li>
                <li>Can be updated using setState</li>
                <li>Causes re-renders when changed</li>
                <li>Used for interactive features</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-600">Props</h3>
              <p className="text-gray-700 leading-relaxed">
                Props (properties) are like parameters passed to a component. They allow parent
                components to pass data down to child components. Props are read-only and help
                make components reusable.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Passed from parent to child</li>
                <li>Read-only (immutable)</li>
                <li>Make components reusable</li>
                <li>Can be any data type</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* State Example Section */}
      <section className="mb-12">
        <StateExample />
      </section>

      {/* Props Example Section */}
      <section className="mb-12">
        <PropsExample />
      </section>

      {/* Interactive Demo Section */}
      <section className="mb-12">
        <InteractiveDemo />
      </section>

      {/* Key Differences Section */}
      <section className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Key Differences
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Aspect</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-600">State</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-green-600">Props</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Ownership</td>
                <td className="border border-gray-300 px-4 py-3">Component owns its state</td>
                <td className="border border-gray-300 px-4 py-3">Passed from parent</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Mutability</td>
                <td className="border border-gray-300 px-4 py-3">Can be changed</td>
                <td className="border border-gray-300 px-4 py-3">Read-only</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Updates</td>
                <td className="border border-gray-300 px-4 py-3">Causes re-render</td>
                <td className="border border-gray-300 px-4 py-3">Parent controls updates</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Purpose</td>
                <td className="border border-gray-300 px-4 py-3">Internal data</td>
                <td className="border border-gray-300 px-4 py-3">External data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default HomePage;
