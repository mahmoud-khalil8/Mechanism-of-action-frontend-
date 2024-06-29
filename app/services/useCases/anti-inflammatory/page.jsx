import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <article className="container mx-auto px-4 py-10 bg-white shadow-lg rounded-lg">
      <header className="mb-8 border-b pb-4">
        <Link href="/services/useCases">         <div className="text-blue-500 pb-10 pt-8">&lt; Back to Case Studies</div>       </Link>
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Anti-Inflammatory Drugs and Diseases</h1>
      </header>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Introduction</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>NSAIDs: Inhibit the enzyme cyclooxygenase (COX), thereby reducing the production of inflammatory prostaglandins.</li>
          <li>Corticosteroids: Suppress the immune response and decrease inflammation by inhibiting the production of inflammatory cytokines.</li>
          <li>Immunosuppressants: Suppress the immune system's activity to reduce inflammation, commonly used in autoimmune diseases.</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          The chief drugs used to treat inflammation may (somewhat arbitrarily) be divided into three major groups:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>Drugs that inhibit the cyclooxygenase enzyme—the nonsteroidal anti-inflammatory drugs (NSAIDs) and the coxibs.</li>
          <li>Anti-rheumatoid drugs, the disease-modifying antirheumatic drugs (DMARDs), including some immunosuppressants.</li>
          <li>The new anticytokine, and other biological agents.</li>
        </ul>
      </section>

      <section className="mb-8">
  <h2 className="text-3xl font-semibold mb-4 text-gray-700">MOAs</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div className="border p-4 rounded-lg bg-gray-50">
      <h3 className="text-xl font-semibold mb-2 text-gray-600">Common Conditions</h3>
      <p className="text-lg text-gray-700">
        Rheumatoid arthritis, inflammatory bowel diseases (Crohn's disease, ulcerative colitis), psoriasis, asthma.
      </p>
    </div>
    <div className="border p-4 rounded-lg bg-gray-50">
      <h3 className="text-xl font-semibold mb-2 text-gray-600">Examples</h3>
      <p className="text-lg text-gray-700">Ibuprofen, aspirin, prednisone, dexamethasone.</p>
    </div>
  </div>

  <div className="bg-gray-100 p-6 rounded-lg">
    {/* <h3 className="text-xl font-semibold mb-4 text-gray-600">Mechanisms of Action</h3> */}
    <ul className="list-decimal list-inside text-lg text-gray-700">
      <li className="mb-2">
        <span className="font-semibold">Acetylcholine receptor antagonist</span>
        <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
          <li>Blocks acetylcholine receptors, reducing parasympathetic nervous system activity.</li>
        </ul>
      </li>
      <li className="mb-2">
        <span className="font-semibold">Adenosine receptor agonist</span>
        <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
          <li>Activates adenosine receptors, leading to anti-inflammatory effects.</li>
        </ul>
      </li>
      <li className="mb-2">
        <span className="font-semibold">Adenosine receptor antagonist</span>
        <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
          <li>Blocks adenosine receptors, potentially modulating inflammation.</li>
        </ul>
      </li>
      <li className="mb-2">
        <span className="font-semibold">Adrenergic receptor antagonist</span>
        <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
          <li>Inhibits adrenergic receptors, affecting the sympathetic nervous system.</li>
        </ul>
      </li>
      <li className="mb-2">
        <span className="font-semibold">Glucocorticoid receptor agonist</span>
        <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
          <li>Stimulates glucocorticoid receptors, reducing inflammation.</li>
        </ul>
      </li>
      <li className="mb-2">
        <span className="font-semibold">Histamine receptor antagonist</span>
        <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
          <li>Blocks histamine receptors, reducing allergic responses and inflammation.</li>
        </ul>
      </li>
      <li className="mb-2">
        <span className="font-semibold">Leukotriene inhibitor</span>
        <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
          <li>Inhibits leukotrienes, reducing inflammation and bronchoconstriction.</li>
        </ul>
      </li>
      <li className="mb-2">
        <span className="font-semibold">Nitric oxide production inhibitor</span>
        <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
          <li>Reduces nitric oxide production, modulating inflammatory responses.</li>
        </ul>
      </li>
      <li className="mb-2">
        <span className="font-semibold">Prostaglandin inhibitor</span>
        <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
          <li>Inhibits prostaglandin synthesis, reducing inflammation and pain.</li>
        </ul>
      </li>
      <li className="mb-2">
        <span className="font-semibold">TNF inhibitor</span>
        <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
          <li>Blocks tumor necrosis factor, reducing inflammatory and immune responses.</li>
        </ul>
      </li>
    </ul>
  </div>
</section>


      <div className="overflow-x-auto pb-10">
                <h2 className="text-3xl font-semibold mb-4 text-gray-700">Drugs</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="border p-4 rounded-lg bg-gray-50">
                        <p className="text-lg text-gray-700">
                             Rheumatoid arthritis, inflammatory bowel diseases (Crohn's disease, ulcerative colitis), psoriasis, asthma.  
                        </p>
                        </div>
                        <div className="border p-4 rounded-lg bg-gray-50">
                        <p className="text-lg text-gray-700"> Examples: Ibuprofen, aspirin, prednisone, dexamethasone.</p>
                        </div>
                    </div>

      <table className="w-full max-w-md table-auto">

        <tbody>
  <tr>
    <td className="px-4 py-3 border-b">Ibuprofen</td>
    <td className="px-4 py-3 border-b">Naproxen</td>
    <td className="px-4 py-3 border-b">Aspirin</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Celecoxib</td>
    <td className="px-4 py-3 border-b">Diclofenac</td>
    <td className="px-4 py-3 border-b">Indomethacin</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Meloxicam</td>
    <td className="px-4 py-3 border-b">Prednisone</td>
    <td className="px-4 py-3 border-b">Prednisolone</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Dexamethasone</td>
    <td className="px-4 py-3 border-b">Hydrocortisone</td>
    <td className="px-4 py-3 border-b">Methylprednisolone</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Triamcinolone</td>
    <td className="px-4 py-3 border-b">Etodolac</td>
    <td className="px-4 py-3 border-b">Ketorolac</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Diflunisal</td>
    <td className="px-4 py-3 border-b">Etodolac</td>
    <td className="px-4 py-3 border-b">Nabumetone</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Sulindac</td>
    <td className="px-4 py-3 border-b">Mefenamic acid</td>
    <td className="px-4 py-3 border-b">Ketorolac</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Oxaprozin</td>
    <td className="px-4 py-3 border-b">Tenoxicam</td>
    <td className="px-4 py-3 border-b">Fenoprofen</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Tolmetin</td>
    <td className="px-4 py-3 border-b">Nabumetone</td>
    <td className="px-4 py-3 border-b">Salsalate</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Celecoxib</td>
    <td className="px-4 py-3 border-b">Diclofenac sodium</td>
    <td className="px-4 py-3 border-b">Ketoprofen</td>
  </tr>
</tbody>

      </table>
    </div>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Anti-Inflammatory Diseases</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>Rheumatoid arthritis: An autoimmune disorder characterized by chronic inflammation in the joints, leading to pain, swelling, and stiffness.</li>
          <li>Osteoarthritis: A degenerative joint disease characterized by the breakdown of joint cartilage and underlying bone, often resulting in pain and stiffness.</li>
          <li>Inflammatory bowel disease (IBD): Includes Crohn's disease and ulcerative colitis, chronic inflammatory conditions affecting the gastrointestinal tract, leading to symptoms such as abdominal pain, diarrhea, and rectal bleeding.</li>
          <li>Asthma: A chronic respiratory condition characterized by airway inflammation, bronchoconstriction, and airflow obstruction, resulting in symptoms like wheezing, coughing, and shortness of breath.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-gray-600">Most Dangerous</h3>
            <p className="text-lg text-gray-700">
              Inflammatory bowel disease (IBD): Severe forms of IBD, particularly Crohn's disease, can lead to life-threatening complications such as bowel perforation, severe bleeding, and increased risk of colorectal cancer.
            </p>
          </div>
          <div className="border p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-gray-600">Most Widespread</h3>
            <p className="text-lg text-gray-700">
              Osteoarthritis: This degenerative joint disease is one of the most common forms of arthritis, affecting millions of people worldwide, especially older adults. It primarily affects weight-bearing joints such as the knees, hips, and spine.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Examples</h2>
        <p className="text-lg text-gray-700 mb-4">
          Examples of where finding effective treatments or cures presents significant challenges:
        </p>
        <p className="text-lg text-gray-700 pb-10">
          Systemic lupus erythematosus (SLE): Lupus is a complex autoimmune disease that can affect multiple organs and systems in the body, leading to a wide range of symptoms such as joint pain, skin rashes, fatigue, and organ damage. Finding effective treatments for lupus is challenging due to its heterogeneity, unpredictable course, and poorly understood underlying mechanisms. While various medications, including corticosteroids, immunosuppressants, and biologic agents, can help manage symptoms and reduce disease activity, there is no cure for lupus, and treatment often involves a trial-and-error approach to find the most suitable therapy for each individual.
        </p>
      </section>
    </article>
  );
}

export default Page;
