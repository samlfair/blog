export default function(doc) {
  if (doc.type === "post") return "/" + doc.uid;
  return "/";
}
