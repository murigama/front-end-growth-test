export default function SwitchLanguage() {
  return (
    <div className="max-w-[210px] mt-8">
      <label htmlFor="languages" className="sr-only">
        Language:
      </label>
      <select
        name="languages"
        id="locales"
        className="bg-white opacity-10 h-11 w-full text-white rounded-md"
        defaultValue={"en"}
      >
        <option value="en" selected>
          English
        </option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
}
