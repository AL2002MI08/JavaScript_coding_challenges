function pigIt(str) {
    let reg = ['!',"?"]
    return str.split(" ").map(e => !reg.includes(e) ? `${e.slice(1)}${e.split("")[0]}ay`:e).join(" ");
  }