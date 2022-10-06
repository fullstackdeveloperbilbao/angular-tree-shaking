# Angular frequent modules
https://angular.io/guide/frequent-ngmodules


# Without CommonModule
- Eager----------205KB
- Lazy1----------775B
- Lazy2----------775B

# With CommonModule
- Eager----------205KB
- Lazy1----------796B
- Lazy2----------796B

# With CommonModule + HttpClientModule
- Eager----------222KB
- Lazy1----------796B
- Lazy2----------796B


# With CommonModule + HttpClientModule + FormsModule
- Eager----------231KB
- Lazy1----------796B
- Lazy2----------796B

# With CommonModule + HttpClientModule + FormsModule + ReactiveFormsModule
- Eager----------231KB
- Lazy1----------796B
- Lazy2----------796B

# With CommonModule + HttpClientModule + FormsModule + ReactiveFormsModule + BrowserModule (It was present already in app.module.ts but no on lazy modules)
- Eager----------231KB
- Lazy1----------796B
- Lazy2----------796B


# Tests with components and services
## Without components and services
- Lazy3----------791B
## With EmptyService
- Lazy3----------977B

## With FilledService
- Lazy3----------1,4KB

## With EmptyComponent (EmptyModule)
- Lazy3----------929B

## With FilledComponent (FilledModule)
- Lazy3----------929B


## With Filled2Component (Filled2Module)
- Lazy3----------929B

## With EmptyComponent (EmptyModule) + FilledComponent (FilledModule)
- Lazy3----------1,1KB

## With EmptyComponent (EmptyModule) + FilledComponent (FilledModule)  + Filled2Component (Filled2Module)
- Lazy3----------1,2KB


# Conclusions:
- Components: It does not affect if a component is filled it will be tree shaking PARTIALLY. In the examples each tree shaken component increments bundle size per 0,1KB
- Services: Injected services are NOT tree shaken. We can use providedIn: 'root' to have COMPLETELY tree-shakeable services.

