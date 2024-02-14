# Amplify Data Error Repro

I am experience two issues with Amplify Data:

1: [Build failure: "Type instantiation is excessively deep and possibly infinite."](https://github.com/aws-amplify/amplify-category-api/issues/2262)
2: [Deploy failure: `The following resource(s) failed to create: [amplifyDataProfileNestedStackProfileNestedStackResourceB5430B89]`](https://github.com/aws-amplify/amplify-category-api/issues/2271)

## Set up

Clone the repo and install dependencies:

```bash
git clone https://github.com/johnpc/amplify-demo-data-type-infinite
cd amplify-demo-data-type-infinite
npm install
```

## Reproduce "Type instantiation is excessively deep and possibly infinite" issue

Run the build and notice the build failure:

```bash
npm run build
```

This is consistently reproducible everywhere.

## Reproduce deployment issue

Run the sandbox deployment:

```bash
npx amplify sandbox
```

Intermittently (and strangely, it may depend on the AWS account) the deployment will fail when starting from zero (all resources destroyed). Iterative deployments succeed (for example, when one model is added per deployment, eventually building the schema in `amplify/data/resource.ts`). Therefore the final schema is valid, it's just an issue with deploying it all at once.

The error in the Cloudformation console shows:

```bash
Embedded stack arn:aws:cloudformation:us-west-2:566092841021:stack/amplify-dfmueaydqaxlo-pr14-branch-a7281b577b-data7552DF31-1JSVQR8U424A8/f4783232-cac5-11ee-8186-0aa259bf7d4b was not successfully created: The following resource(s) failed to create: [amplifyDataProfileNestedStackProfileNestedStackResourceB5430B89].
```

This is most likely to occur on a freshly created AWS account.
