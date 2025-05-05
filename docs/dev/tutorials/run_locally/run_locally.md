## Run a full diracx demo

TODO: expand


This will allow you to run a demo setup.

The code changes will be reflected in the demo.

Requirement: docker, internet

```bash
# Clone the diracx repository
git clone git@github.com:DIRACGrid/diracx.git

# Clone the diracx-chart repository
git clone git@github.com:DIRACGrid/diracx-charts.git

# Run the demo
diracx-charts/run_demo.sh diracx/
```

To login, click the **authorize** button

![authorize](login_demo_1.png)

Connect using the authorization code flow, ticking the "vo:diracAdmin" scope

![codeflow](login_demo_2.png)

And enter the credentials prompted by the `run_demo.sh` script in the `Dex` interface

![Dexlogin](login_demo_3.png)
