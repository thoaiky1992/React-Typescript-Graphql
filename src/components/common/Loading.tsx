import { FC } from "react"

export const Loading: FC = () => {
  return (
    <div className="page-loader-wrapper">
      <div className="loader">
        <div className="m-t-30">
          <img className="zmdi-hc-spin" src="/assets/images/logo.svg" width="48" height="48" alt="Compass" />
        </div>
        <p>Please wait...</p>
      </div>
    </div>
  )
}