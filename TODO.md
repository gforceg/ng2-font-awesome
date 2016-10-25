### TODOs
| Filename | line # | TODO
|:------|:------:|:------
| node_modules/typescript/Gulpfile.ts | 70 | @weswig Update child_process types to add windowsVerbatimArguments to the type definition
| node_modules/tsickle/src/es5processor.ts | 45 | @evanm only emit the goog.module *after* the first comment,
| node_modules/tsickle/src/jsdoc.ts | 122 | @evanm this is a pile of hacky regexes for now, because we
| node_modules/tsickle/src/tsickle.ts | 625 | handle strange member:\n${this.escapeForComment(p.getText())}\n
| node_modules/tsickle/src/tsickle.ts | 803 | ${ts.SyntaxKind[node.kind]} in ${namespace.join('.')}
| node_modules/tsickle/src/tsickle.ts | 839 | unify the multiple constructors as overloads.
| node_modules/tsickle/src/tsickle.ts | 866 | For now property names other than Identifiers are not handled; e.g.
| node_modules/tsickle/src/tsickle.ts | 890 | ${ts.SyntaxKind[member.kind]}: ${memberName.join('.')}
| node_modules/tsickle/src/type-translator.ts | 224 | @rado handle tuples in their own branch.
| node_modules/tsickle/src/type-translator.ts | 336 | @evanm revisit this if it is a problem.
| node_modules/tslint/scripts/buildDocs.ts | 76 | Use Object.assign when Node 0.12 support is dropped (#1181)
| node_modules/rxjs/src/observable/FromEventPatternObservable.ts | 80 | determine whether or not to forward to error handler
| node_modules/rxjs/src/operator/mergeMapTo.ts | 70 | Figure out correct signature here: an Operator<Observable<T>, R>
| node_modules/tsickle/test_files/interface/interface.ts | 15 | this example crashes the compiler -- I've mailed the team about it.
| node_modules/tsickle/test_files/interface/interface.ts | 29 | handle optional members.  Should have |undefined type.
| node_modules/tsickle/test_files/interface/interface.tsickle.ts | 25 | handle strange member:
| node_modules/tsickle/test_files/interface/interface.tsickle.ts | 30 | handle strange member:
| node_modules/tsickle/test_files/interface/interface.tsickle.ts | 39 | this example crashes the compiler -- I've mailed the team about it.
| node_modules/tsickle/test_files/interface/interface.tsickle.ts | 53 | handle optional members.  Should have |undefined type.
| node_modules/tsickle/test_files/jsdoc_types/module2.ts | 6 | @evanm 
| node_modules/tsickle/test_files/jsdoc_types/module2.tsickle.ts | 11 | @evanm 
| node_modules/tsickle/test_files/jsdoc_types.untyped/module2.ts | 6 | @evanm 
| node_modules/tsickle/test_files/jsdoc_types.untyped/module2.tsickle.ts | 6 | @evanm 
| node_modules/tsickle/test_files/type/type.ts | 24 | let typeFunc4: (a: number, ...args: number[]) => void;
| node_modules/tslint/typings/underscore.string/underscore.string.d.ts | 573 | interface UnderscoreString extends Underscore<string>
| node_modules/zone.js/lib/node/fs.ts | 8 | @alxhub Patch `watch` and `unwatchFile`.
| node_modules/zone.js/lib/node/node.ts | 32 | @gdi2290 implement a better way to patch these methods
| node_modules/rxjs/src/observable/dom/WebSocketSubject.ts | 81 | @Subscriber implementation and eliminate closures factor this out to be a proper Operator
| gulpfile.js | 6 | add a AOT compilation task