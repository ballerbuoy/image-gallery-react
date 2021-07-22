function trimCaption(element: HTMLSpanElement | null, lines: number = 1): void {
  if (!element) return;

  const maxHeight: number =
    Number(window.getComputedStyle(element).lineHeight.slice(0, -2)) * lines;
  if (element.clientHeight <= maxHeight) return;

  function canBePlaced(len: number): boolean {
    if (!element) return false;
    const leftHalf = data.substr(0, len);
    const rightHalf = data.substr(data.length - len);

    element.innerText = leftHalf + "..." + rightHalf;
    return element.clientHeight <= maxHeight;
  }

  const data: string = element.innerText;
  let low: number = 0,
    high: number = data.length,
    mid: number,
    ans: number | undefined = undefined;

  while (low <= high) {
    mid = ~~(low + (high - low) / 2);

    if (canBePlaced(mid)) {
      ans = ~~mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  const truncatedCaption = ans
    ? data.substr(0, ans) + "..." + data.substr(data.length - ans)
    : "";
  element.innerText = truncatedCaption;
}

export { trimCaption };
