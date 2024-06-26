async function getState(promise) {
    const pendingPromise = new Promise(resolve => setTimeout(() => resolve('pending')));
    return Promise.race([
      promise.then(() => 'fulfilled').catch(() => 'rejected'),
      pendingPromise
    ]);
  }
  