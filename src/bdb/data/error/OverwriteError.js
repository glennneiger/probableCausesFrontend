class OverwriteError extends Error {
  constructor(message) {
    super(message);
    this.name = 'OverwriteError';
  }
}

export default OverwriteError;