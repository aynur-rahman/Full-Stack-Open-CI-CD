# Exercise 11.1: Warm up

Say a team of six is building a Python app close to its first release. I would run a short pipeline on every pull request and on the main branch. Ruff handles linting and formatting, and pytest runs the unit and integration tests. If the app uses a database, the tests should get their own separate database so they never touch production data. For the build, the build package makes a wheel, which I would install in a clean environment and smoke test to catch missing files.

Besides Jenkins and GitHub Actions, the team could use GitLab CI/CD or CircleCI. The choice mostly depends on where the code is already hosted and what integrations the team needs.

For a small team I would start with cloud-hosted runners, since maintaining our own machines takes time away from the app. Self-hosting makes more sense if the tests need a private network, special hardware, or data that can't leave the company. To decide, I'd want to know how often builds run, the security requirements, the budget, and who would maintain the runners.

Deployment should only happen after the checks pass, and a health check should confirm the new version is up.
