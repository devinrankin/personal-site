export function setPageLoads(pageLoads: number) {
  localStorage.setItem("loaded", `${pageLoads}`);
}

export function getPageLoads() {
  return parseInt(localStorage.getItem("loaded") ?? "0", 10);
}
