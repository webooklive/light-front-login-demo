const getOrderPage = (authState, experienceId, orderPageId) => {
  if (!experienceId) {
    experienceId = authState.account.experiences[0].id;
  }

  const experience = authState.account.experiences.find((e) => e.id === experienceId);
  return experience.order_pages.find((o) => o.id === orderPageId);
};

const getOrderPages = (authState, experienceId) => {
  if (!experienceId) {
    experienceId = authState.account.experiences[0].id;
  }

  const experience = authState.account.experiences.find((e) => e.id === experienceId);
  return experience.order_pages;
};

const AuthStateUtils = {
  getOrderPage,
  getOrderPages,
};

export default AuthStateUtils;
