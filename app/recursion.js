recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   *
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   *
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
      fileList = [];
      dirList = [];

      function getDiretoryFiles(data) {
          // This logic assumes that there are NO duplicate directory/sub-directory names.  
          // If there are (and one of those duplicate directories is specified), the results 
          // will return all files listed under each of the subdirectory trees of the specified
          // directory. This may or may not affect the expected result depending on where the
          // duplicated directory name is in the directory hierarchy
          dirList.push(data.dirName);

          if (!dirName || dirList.indexOf(dirName) >= 0) {
              fileList.push(...data.files);
          }

          for (let dir of data.subDirs) {
            getDiretoryFiles(dir);
          }

          dirList.pop();
      }

      getDiretoryFiles(data);

      return fileList;
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   *
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   *
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  },
};
