# Best Practice

- Canopy is an opinionated design system, it is intended to be a set of rigid tested design patterns.

- In most cases it should not be extended or modified within applications.

- There should be a 1 to 1 mapping between the [design](https://legalandgeneral.invisionapp.com/dsm/legalandgeneral/canopy?mode=preview) and development implementation.

With those strict rules in mind, Canopy can provide us with a powerful set of tools to quickly build high quality applications which are visually and behaviorally aligned.

If an application is designed and built with Canopy, you should not need any styles within your application. Canopy should be able to provide you with enough flexibility.

## Troubleshooting

If you encounter a situation where you can't build something that matches the design without modifying the existing components. One of a few things has happened.

### The pattern has not been implemented yet

Discuss the pattern with the designers, check that the pattern is intended to be included in the design system. If this is the case you may need to add it yourself or see if anyone in the core team is available. The best way of approaching this is to raise a new Github issue to start the discussion.

### There is a disconnect between the design and the implementation

There may be some scenarios where what has been built does not accurately match the intentions from the design team. If this is the case feel free to raise a Github issue and the team will support you. Before you do please first have a scan through all of the components and directives in storybook.

### The pattern is not meant for the design system

If it's been decided that the pattern is specific to the project then you will need to build the component into your project. **This should be an exception**. If you are building a component into the your project it should match the standards and approaches used within Canopy. You should familiarise yourself with the linting rules, css variables and mixins to align it as closely as possible. If this pattern is experimental it can potentially be ported over later.
