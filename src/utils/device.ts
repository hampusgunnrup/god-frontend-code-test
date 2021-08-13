interface DeviceTypeMap {
  [index: string]: string | null,
}

const deviceTypeMap: DeviceTypeMap = {
  '1': 'mobile',
  '2': 'desktop',
};

export const deviceTestElementId = 'device-type-test';

function getDeviceType(): string | null {
  const element = document.getElementById(deviceTestElementId);
  const zIndex = element ? window.getComputedStyle(element).getPropertyValue('z-index') : '1';
  return deviceTypeMap[zIndex];
}

export function isMobile(): boolean {
  return getDeviceType() === deviceTypeMap['1'];
}
