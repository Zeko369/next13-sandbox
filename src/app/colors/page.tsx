export default function Page() {
  return (
    <div className="flex flex-row">
      <div>
        <div className="h-32 w-20 bg-gray-500"></div>
        <div className="h-32 w-20 bg-[#5c6475]"></div>
        <div className="h-32 w-20 bg-gray-600"></div>
      </div>
      <div>
        <div className="h-32 w-20 text-gray-500">
          <span className="text-black">Attribute</span>
          <br />
          Description of this attribute
        </div>
        <div className="h-32 w-20 text-[#5c6475]">
          <span className="text-black">Attribute</span>
          <br />
          Description of this attribute
        </div>
        <div className="h-32 w-20 text-gray-600">
          <span className="text-black">Attribute</span>
          <br />
          Description of this attribute
        </div>
      </div>
    </div>
  );
}
