function make_album(artistName, albumTitle, noOfTracks = 0) {
  const obj = {
    name: artistName,
    title: albumTitle,
  };
  if (noOfTracks == 0) {
    return obj;
  } else {
    obj.tracks = noOfTracks;
    return obj;
  }
}
console.log(make_album("Shahbaz", "Understanding JavaScript."));
console.log(make_album("Shahbaz", "Learning JavaScript."));
console.log(make_album("Shahbaz", "Teaching JavaScript.", 6));
