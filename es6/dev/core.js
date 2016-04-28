/**
 * @module
 * @description
 * Starting point to import all public core APIs.
 */
export * from './src/core/metadata';
export * from './src/core/util';
export * from './src/core/prod_mode';
export * from './src/core/di';
export * from './src/facade/facade';
export { enableProdMode } from 'angular2/src/facade/lang';
export { createPlatform, assertPlatform, disposePlatform, getPlatform, coreBootstrap, coreLoadAndBootstrap, createNgZone, PlatformRef, ApplicationRef } from './src/core/application_ref';
export { APP_ID, APP_INITIALIZER, PACKAGE_ROOT_URL, PLATFORM_INITIALIZER } from './src/core/application_tokens';
export * from './src/core/zone';
export * from './src/core/render';
export * from './src/core/linker';
export { DebugElement, DebugNode, asNativeElements } from './src/core/debug/debug_node';
export * from './src/core/testability/testability';
export * from './src/core/change_detection';
export * from './src/core/platform_directives_and_pipes';
export * from './src/core/platform_common_providers';
export * from './src/core/application_common_providers';
export * from './src/core/reflection/reflection';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtM1JwSlh2WEIudG1wL2FuZ3VsYXIyL2NvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUNILGNBQWMscUJBQXFCLENBQUM7QUFDcEMsY0FBYyxpQkFBaUIsQ0FBQztBQUNoQyxjQUFjLHNCQUFzQixDQUFDO0FBQ3JDLGNBQWMsZUFBZSxDQUFDO0FBQzlCLGNBQWMscUJBQXFCLENBQUM7QUFDcEMsU0FBUSxjQUFjLFFBQU8sMEJBQTBCLENBQUM7QUFDeEQsU0FDRSxjQUFjLEVBQ2QsY0FBYyxFQUNkLGVBQWUsRUFDZixXQUFXLEVBQ1gsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixZQUFZLEVBQ1osV0FBVyxFQUNYLGNBQWMsUUFDVCw0QkFBNEIsQ0FBQztBQUNwQyxTQUNFLE1BQU0sRUFDTixlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLG9CQUFvQixRQUNmLCtCQUErQixDQUFDO0FBQ3ZDLGNBQWMsaUJBQWlCLENBQUM7QUFDaEMsY0FBYyxtQkFBbUIsQ0FBQztBQUNsQyxjQUFjLG1CQUFtQixDQUFDO0FBQ2xDLFNBQVEsWUFBWSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsUUFBTyw2QkFBNkIsQ0FBQztBQUN0RixjQUFjLG9DQUFvQyxDQUFDO0FBQ25ELGNBQWMsNkJBQTZCLENBQUM7QUFDNUMsY0FBYywwQ0FBMEMsQ0FBQztBQUN6RCxjQUFjLHNDQUFzQyxDQUFDO0FBQ3JELGNBQWMseUNBQXlDLENBQUM7QUFDeEQsY0FBYyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBTdGFydGluZyBwb2ludCB0byBpbXBvcnQgYWxsIHB1YmxpYyBjb3JlIEFQSXMuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vc3JjL2NvcmUvbWV0YWRhdGEnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29yZS91dGlsJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2NvcmUvcHJvZF9tb2RlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2NvcmUvZGknO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZmFjYWRlL2ZhY2FkZSc7XG5leHBvcnQge2VuYWJsZVByb2RNb2RlfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuZXhwb3J0IHtcbiAgY3JlYXRlUGxhdGZvcm0sXG4gIGFzc2VydFBsYXRmb3JtLFxuICBkaXNwb3NlUGxhdGZvcm0sXG4gIGdldFBsYXRmb3JtLFxuICBjb3JlQm9vdHN0cmFwLFxuICBjb3JlTG9hZEFuZEJvb3RzdHJhcCxcbiAgY3JlYXRlTmdab25lLFxuICBQbGF0Zm9ybVJlZixcbiAgQXBwbGljYXRpb25SZWZcbn0gZnJvbSAnLi9zcmMvY29yZS9hcHBsaWNhdGlvbl9yZWYnO1xuZXhwb3J0IHtcbiAgQVBQX0lELFxuICBBUFBfSU5JVElBTElaRVIsXG4gIFBBQ0tBR0VfUk9PVF9VUkwsXG4gIFBMQVRGT1JNX0lOSVRJQUxJWkVSXG59IGZyb20gJy4vc3JjL2NvcmUvYXBwbGljYXRpb25fdG9rZW5zJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2NvcmUvem9uZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9jb3JlL3JlbmRlcic7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9jb3JlL2xpbmtlcic7XG5leHBvcnQge0RlYnVnRWxlbWVudCwgRGVidWdOb2RlLCBhc05hdGl2ZUVsZW1lbnRzfSBmcm9tICcuL3NyYy9jb3JlL2RlYnVnL2RlYnVnX25vZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29yZS90ZXN0YWJpbGl0eS90ZXN0YWJpbGl0eSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29yZS9wbGF0Zm9ybV9kaXJlY3RpdmVzX2FuZF9waXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9jb3JlL3BsYXRmb3JtX2NvbW1vbl9wcm92aWRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29yZS9hcHBsaWNhdGlvbl9jb21tb25fcHJvdmlkZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2NvcmUvcmVmbGVjdGlvbi9yZWZsZWN0aW9uJztcbiJdfQ==