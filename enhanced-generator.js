// enhanced-generator.js - Enhanced conjecture generation with semantic richness
class EnhancedConjectureGenerator {
    constructor(theoryVectorSpace) {
        this.theorySpace = theoryVectorSpace;
        this.relationshipMemory = new Map();
        this.logicalConstraints = new Set();
        this.generationMetadata = {
            schemaEnhanced: false,
            fallbackUsed: false,
            constraintsApplied: 0,
            vectorDimensions: 5
        };
    }

    generateEnhancedVariables(seedConcept) {
        const key = seedConcept.toLowerCase().replace(/[^a-z\s]/g, '').trim();
        const schema = TheorySchemas[key];
        
        if (schema) {
            this.generationMetadata.schemaEnhanced = true;
            this.generationMetadata.fallbackUsed = false;
            
            const constructs = Object.keys(schema.constructs);
            const relations = schema.causal_patterns;
            
            return {
                independent: constructs.filter(c => relations.some(r => r[0] === c)),
                dependent: constructs.filter(c => relations.some(r => r[2] === c)),
                moderators: schema.scope_conditions || ['institutional_context'],
                constructs: schema.constructs,
                theoreticalStatus: schema.theoretical_status || 'established'
            };
        }
        
        // Enhanced fallback - no more circular naming!
        this.generationMetadata.schemaEnhanced = false;
        this.generationMetadata.fallbackUsed = true;
        
        return this.generateExpansiveVariables(seedConcept);
    }

    generateExpansiveVariables(concept) {
        const conceptRoot = concept.replace(/\s+theory$/i, '').replace(/\s+/g, '_');
        
        return {
            independent: [
                `${conceptRoot}_institutional_strength`,
                `${conceptRoot}_resource_availability`, 
                `${conceptRoot}_actor_motivation`,
                `contextual_${conceptRoot}`
            ],
            dependent: [
                `${conceptRoot}_effectiveness`,
                `${conceptRoot}_outcomes`, 
                `${conceptRoot}_impact`,
                `system_response_to_${conceptRoot}`
            ],
            moderators: ['institutional_context', 'resource_constraints', 'temporal_factors'],
            constructs: {},
            theoreticalStatus: 'conjecture'
        };
    }

    validateConjecture(x, relation, y) {
        const key = `${x}→${y}`;
        const existing = this.relationshipMemory.get(key);
        
        if (existing && existing !== relation) {
            return { valid: false };
        }
        
        this.relationshipMemory.set(key, relation);
        this.generationMetadata.constraintsApplied++;
        return { valid: true };
    }

    generatePreciseConjecture(pattern, variables, seedConcept) {
        const vars = this.generateEnhancedVariables(seedConcept);
        
        if (vars.independent.length === 0 || vars.dependent.length === 0) {
            return null;
        }
        
        const X = vars.independent[Math.floor(Math.random() * vars.independent.length)];
        const Y = vars.dependent[Math.floor(Math.random() * vars.dependent.length)];
        const relation = Math.random() > 0.5 ? 'increases' : 'decreases';
        
        const validation = this.validateConjecture(X, relation, Y);
        if (!validation.valid) {
            return null;
        }
        
        const magnitude = (0.2 + Math.random() * 0.3).toFixed(2);
        const rSquared = (parseFloat(magnitude) * 100).toFixed(1);
        const betaCoeff = (Math.random() * 0.6 + 0.2).toFixed(3);
        
        let conjecture = '';
        let confidenceLevel = 'Medium';
        
        switch (pattern.name) {
            case 'direct_causation':
                conjecture = `A one standard deviation increase in ${X.replace(/_/g, ' ')} ${relation} ${Y.replace(/_/g, ' ')} by approximately ${magnitude} standard deviations (β = ${betaCoeff}, expected R² contribution: ${rSquared}%)`;
                confidenceLevel = 'High - Linear relationship with clear theoretical foundation';
                break;
                
            case 'threshold_effect':
                const threshold = (60 + Math.random() * 20).toFixed(0);
                const thresholdBeta = (0.4 + Math.random() * 0.6).toFixed(3);
                conjecture = `${X.replace(/_/g, ' ')} affects ${Y.replace(/_/g, ' ')} only above the critical threshold (estimated at ${threshold}th percentile of ${X.replace(/_/g, ' ')} distribution), with effect strength β = ${thresholdBeta} above threshold`;
                confidenceLevel = 'Medium - Conditional effect requiring threshold validation';
                break;
                
            case 'moderated_relationship':
                const moderator = vars.moderators[Math.floor(Math.random() * vars.moderators.length)];
                const mainEffect = (0.4 + Math.random() * 0.4).toFixed(3);
                const interactionEffect = (0.2 + Math.random() * 0.4).toFixed(3);
                conjecture = `The effect of ${X.replace(/_/g, ' ')} on ${Y.replace(/_/g, ' ')} is moderated by ${moderator.replace(/_/g, ' ')} (β₁ = ${mainEffect}, β₃ = ${interactionEffect} for interaction term)`;
                confidenceLevel = 'High - Interaction effect with clear boundary conditions';
                break;
        }
        
        return {
            text: conjecture,
            confidence: confidenceLevel,
            variables: { independent: X, dependent: Y, relation }
        };
    }

    getGenerationMetadata() {
        return {
            ...this.generationMetadata,
            efficiency: ((this.generationMetadata.constraintsApplied / Math.max(this.relationshipMemory.size, 1)) * 100).toFixed(1)
        };
    }
}

// Make available globally
window.EnhancedConjectureGenerator = EnhancedConjectureGenerator;
