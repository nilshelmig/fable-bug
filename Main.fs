module Main

open Fable.Core.JsInterop

let dateTimeFormat () =
  let intl = importDefault<obj> "intl"
  importSideEffects "intl/locale-data/jsonp/de-DE.js"
  intl?DateTimeFormat