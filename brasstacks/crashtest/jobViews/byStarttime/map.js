function (doc) {
  if (doc.type == "job") {
    emit(doc.starttime, doc);
  }
}