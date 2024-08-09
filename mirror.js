function evilTwin(obj) {
    let newObj = Object.create(obj, {
        hasGoatee : {
            value : true
        }
    });
    return newObj;
  }