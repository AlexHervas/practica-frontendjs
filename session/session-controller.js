import { isUserLoggedIn } from "../utils/auth.js";
import { buildAuthorizedSession, buildUnauthorizedSession } from "./session-view.js";

export function sessionController(sessionContainer) {

  if (isUserLoggedIn()) {
    sessionContainer.innerHTML = buildAuthorizedSession();
    const closeSessionButton = sessionContainer.querySelector("button")
    closeSessionButton.addEventListener("click", () => {
      localStorage.removeItem("jwt")
      alert("Has cerrado sesión.")
      sessionController(sessionContainer)
    })
  } else {
    sessionContainer.innerHTML = buildUnauthorizedSession()
  }
}