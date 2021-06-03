// Dynamic importing of js files.

export default function importLazy(func) {
  try {
    console.log("func", func);
    if (func instanceof Function) {
      return {
        call: async function () {
          const modules = await func();
          console.log("modules", modules);
          return modules;
        }
      };
    }
    throw new Error("Not a function or an import function");
  } catch (err) {
    console.error("Dynamic Import error", err);
  }
}
