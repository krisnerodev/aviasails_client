import _ from "lodash";

export const ErrorsInfoHelper = {
  sortErrorsByCode: (errors) => {
    return errors.sort((error1, error2) => error1.code - error2.code);
  },

  getMainErrors: (errors) => {
    const mainErrors = [];
    errors.map((error) => {
      if (error.code !== null && mainErrors.length < 3) return mainErrors.push(error);
    });
    return mainErrors;
  },

  getOtherErrors: (errors, mainErrors) => {
    const otherErrors = _.difference(errors, mainErrors);
    const counts = otherErrors.map((error) => error.count);
    if (_.isEmpty(counts)) return {count: 0};
    return {count: counts.reduce((count1, count2) => count1 + count2)};
  },

  getPreparedErrors: (errors) => {
    if (_.isEmpty(errors)) return {};
    const sortedErrors = ErrorsInfoHelper.sortErrorsByCode(errors);
    const mainErrors = ErrorsInfoHelper.getMainErrors(sortedErrors);
    const otherErrors = ErrorsInfoHelper.getOtherErrors(sortedErrors, mainErrors);
    return {mainErrors, otherErrors};
  },

  getTotalErrorCount: (mainErrors, otherErrors) => {
    if (_.isEmpty(mainErrors)) return _.get(otherErrors, "count", 0);
    return mainErrors.reduce((error1, error2) => {
      return _.get(error1, "count", 0) + _.get(error2, "count", 0);
    }, 0) + _.get(otherErrors, "count", 0);
  }

};