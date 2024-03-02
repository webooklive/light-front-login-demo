import { useAuthInfo } from '@propelauth/react';

const ADMIN_ROLE = 'Admin';

export const UseAuthPermissions = () => {
  const { accessHelper, orgHelper } = useAuthInfo();
  if (!accessHelper || !orgHelper) {
    return { readOnly: true, acctSettingsEditor: false };
  }
  let readOnly = true;
  let acctSettingsEditor = false;
  const orgIds = orgHelper.getOrgIds();
  if (orgIds.length > 0) {
    const org = orgIds[0];
    readOnly = !accessHelper.isAtLeastRole(org, ADMIN_ROLE);
    acctSettingsEditor = accessHelper.hasPermission(org, 'acctSettingsEditor');
  }

  return { readOnly, acctSettingsEditor };
};
