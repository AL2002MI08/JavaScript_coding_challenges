const dashatize = num => Math.abs(num).toString().split(/([13579])/g).filter(Boolean).join('-');
