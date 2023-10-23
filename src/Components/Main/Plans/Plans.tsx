import "./Plans.css";

export const Plans = () => {
  return (
    <div className="Plans">
      <div className="plansTitle">
        <h3>Pricing Plans</h3>
        <p>Choose a pricing plan that fits your needs.</p>
      </div>
      <div className="plansBox">
        <div>
          <h3>Basic</h3>
          <p>10GB Storage</p>
          <p>10 Emails</p>
          <p>10 Domains</p>
          <p>Endless Support</p>
          <p className="large">
            <h2>$ 10</h2>
            <span>Per month</span>
          </p>
          <form>
            <button>sign up</button>
          </form>
        </div>
        <div>
          <h3 className="proPlan">Pro</h3>
          <p>25GB Storage</p>
          <p>25 Emails</p>
          <p>25 Domains</p>
          <p>Endless Support</p>
          <p className="large">
            <h2>$ 25</h2>
            <span>Per month</span>
          </p>
          <form>
            <button>sign up</button>
          </form>
        </div>
        <div>
          <h3>Premium</h3>
          <p>50GB Storage</p>
          <p>50 Emails</p>
          <p>50 Domains</p>
          <p>Endless Support</p>
          <p className="large">
            <h2>$ 50</h2>
            <span>Per month</span>
          </p>
          <form>
            <button>sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};
